import React, { useEffect } from 'react';
import { ipcRenderer } from 'electron';
import usePrevious from '../../hooks/usePrevious';
import HeaderSwitch from './HeaderSwitch';
import ConnectStatus from './ConnectStatus';
import SoundAlarm from './SoundAlarm';
import IconButton from '@material-ui/core/IconButton';
// import Tooltip from '@material-ui/core/Tooltip';
import SettingsIcon from '@material-ui/icons/Settings';
import { ELECTRON_NOTIFY } from '../../../Electron/IPC';

const Header = props => {
  const {
    ip,
    lastFreshMessageTS,
    onConnectClick,
    isConnected,
    isConnecting,
    isWaitingHistory,
    isSchemaAvailable,
    isFreshAvailable,
    isCanShowFresh,
    isCanShowHistory,
    ribbonData,
    onModeChange,
    mode,
    onSettingsClick,
    isSoundAlarmOption,
    soundIceThreshold
  } = props;

  // console.log('ribbonData', soundIceThreshold, ribbonData);
  // const isAlarm = !!ribbonData.msgCode && ribbonData.msgCode !== '000';
  const isAlarm = ribbonData.value >= soundIceThreshold;

  const prevIsAlarm = usePrevious(isAlarm);
  useEffect(() => {
    console.log('now is=', isAlarm, 'was=', prevIsAlarm);
    if (isAlarm && !prevIsAlarm) {
      ipcRenderer.send(ELECTRON_NOTIFY);
    }
  }, [isAlarm, prevIsAlarm]);

  return (
    <div className="app_header">
      <ConnectStatus
        ip={ip}
        lastFreshMessageTS={lastFreshMessageTS}
        onConnectClick={onConnectClick}
        isConnected={isConnected}
        isConnecting={isConnecting}
        isWaitingHistory={isWaitingHistory}
        isSchemaAvailable={isSchemaAvailable}
        isFreshAvailable={isFreshAvailable}
      />
      <div style={{ display: 'flex', direction: 'row', alignItems: 'center' }}>
        {isAlarm && isSoundAlarmOption && <SoundAlarm isAlarm={isAlarm} />}
        {/* <Tooltip title="Настройки отображения"> */}
        <IconButton onClick={onSettingsClick} className="setttings_btn">
          <SettingsIcon />
        </IconButton>
        {/* </Tooltip> */}

        <HeaderSwitch
          mode={mode}
          onModeChange={onModeChange}
          isCanShowFresh={isCanShowFresh}
          isCanShowHistory={isCanShowHistory}
          ribbonData={ribbonData}
        />
      </div>
    </div>
  );
};

export default Header;

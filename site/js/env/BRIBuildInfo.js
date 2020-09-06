'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-06 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-1820';
    this._commitGIT = 'c9052197f61cfe362335ae11fa04f7629fbeabb6';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}
'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-06 20:00:04';
    this._versionBuild = 'jenkins-Bricolage-478';
    this._commitGIT = '3d0b6e8567c7dc606f015b38821412b1318e9fb8';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}
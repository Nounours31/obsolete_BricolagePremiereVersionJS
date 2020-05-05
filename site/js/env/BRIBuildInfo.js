'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-05 12:00:08';
    this._versionBuild = 'jenkins-Bricolage-1324';
    this._commitGIT = '7e29530c9de0b260bc209cb046a2eae4affe974b';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}
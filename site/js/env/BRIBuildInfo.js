'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-29 20:00:09';
    this._versionBuild = 'jenkins-Bricolage-1666';
    this._commitGIT = '59beb40b64df4f52941f414ac9d5574873923161';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}
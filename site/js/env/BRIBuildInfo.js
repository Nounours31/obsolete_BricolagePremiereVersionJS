'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-30 12:00:09';
    this._versionBuild = 'jenkins-Bricolage-1548';
    this._commitGIT = '4511f70702e4e90b41e19b7d4a5dd04cdc15ee53';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}
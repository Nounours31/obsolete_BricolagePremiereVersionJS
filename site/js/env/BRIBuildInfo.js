'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-20 16:00:11';
    this._versionBuild = 'jenkins-Bricolage-1629';
    this._commitGIT = '65ecee476ccadc8de55d58cffcc2873a2ef21c52';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}
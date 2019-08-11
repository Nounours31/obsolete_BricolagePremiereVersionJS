'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-11 08:00:14';
    this._versionBuild = 'jenkins-Bricolage-251';
    this._commitGIT = '95dec06fdabbdcfd85858ecf27734c45579c22e3';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}
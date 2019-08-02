'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-02 20:00:15';
    this._versionBuild = 'jenkins-Bricolage-218';
    this._commitGIT = '3c333883a317e6bad3297acaf62afce9595e6068';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}
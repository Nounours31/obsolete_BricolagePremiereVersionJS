'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-13 20:00:06';
    this._versionBuild = 'jenkins-Bricolage-1114';
    this._commitGIT = '46069f270d536bdaf48714595cd3b94d710d4b1a';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}
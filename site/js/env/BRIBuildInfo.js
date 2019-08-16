'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-16 16:00:04';
    this._versionBuild = 'jenkins-Bricolage-273';
    this._commitGIT = '1ee473bbaf4d504960492f26191555c6e495133c';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}
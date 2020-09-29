'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-29 20:00:06';
    this._versionBuild = 'jenkins-Bricolage-1914';
    this._commitGIT = '3fd389a817a2315d1347cb55946251f5c0cef46b';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}
'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-22 20:00:08';
    this._versionBuild = 'jenkins-Bricolage-1274';
    this._commitGIT = '820bd6d64312bdef57fe9fd7f70812942e33a29f';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}
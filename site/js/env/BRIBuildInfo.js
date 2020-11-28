'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-28 16:00:06';
    this._versionBuild = 'jenkins-Bricolage-2153';
    this._commitGIT = '7982baabd4bd61410dfa89b2c3732b76366af0ec';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}
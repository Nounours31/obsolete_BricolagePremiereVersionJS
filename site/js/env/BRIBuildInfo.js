'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-07 16:00:06';
    this._versionBuild = 'jenkins-Bricolage-481';
    this._commitGIT = '4dd93c1fdfdfaea774bb076f18d73d80b5136341';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}
'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-15 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-1120';
    this._commitGIT = '3564ceab8385cd0aa05c99e67bb724ccca31a323';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}
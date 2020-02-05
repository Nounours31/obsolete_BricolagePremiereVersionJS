'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-05 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-966';
    this._commitGIT = '1665f81e83d0b3a8cde2cf5771b165c26ff619cf';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}
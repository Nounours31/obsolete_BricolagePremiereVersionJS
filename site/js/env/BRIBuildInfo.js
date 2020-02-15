'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-15 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-1006';
    this._commitGIT = '4ff54333724e1c4089be34db6ea601beab3e7be3';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}
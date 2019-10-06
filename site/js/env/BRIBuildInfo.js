'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-06 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-477';
    this._commitGIT = 'ec5eacc24d9c5a1de80ccd7e9a1027a4d18577cf';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}
'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-13 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-750';
    this._commitGIT = 'fd20d5dc364275bee5ab6d2935a02c544cf19c17';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}
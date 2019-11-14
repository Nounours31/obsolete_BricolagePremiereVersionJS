'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-14 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-634';
    this._commitGIT = '81190eef643787c74a7f8e98332ed550d78d2069';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}
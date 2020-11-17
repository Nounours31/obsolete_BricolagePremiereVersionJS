'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-17 12:00:08';
    this._versionBuild = 'jenkins-Bricolage-2108';
    this._commitGIT = '896d8d58da02d6be502f6e91f38d978147a7116c';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}
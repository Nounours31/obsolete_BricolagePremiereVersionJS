'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-05 12:00:07';
    this._versionBuild = 'jenkins-Bricolage-2060';
    this._commitGIT = '152fb586e5bd31c58ec56623a9a6fd27c35a02a0';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}
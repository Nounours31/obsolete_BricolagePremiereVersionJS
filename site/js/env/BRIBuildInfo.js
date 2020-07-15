'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-15 12:00:09';
    this._versionBuild = 'jenkins-Bricolage-1608';
    this._commitGIT = 'f46d5bd87fe3038180611294c50b594bdc313d9d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}
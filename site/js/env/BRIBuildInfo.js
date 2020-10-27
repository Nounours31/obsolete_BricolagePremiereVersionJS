'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-27 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-2026';
    this._commitGIT = '72abb7a7c162837936b5339e9800e8b96623e984';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}
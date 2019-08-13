'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-13 12:00:12';
    this._versionBuild = 'jenkins-Bricolage-260';
    this._commitGIT = 'aa057b7eb87903189836c849001beca9d6348d6b';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}
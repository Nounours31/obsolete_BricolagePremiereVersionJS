'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-28 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-690';
    this._commitGIT = '73f9d628a1036c2b5a35e676677168ac9b0faec6';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}
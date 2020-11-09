'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-09 08:00:07';
    this._versionBuild = 'jenkins-Bricolage-2075';
    this._commitGIT = 'c15566e56cb890d03eb1650327e657200fad31b3';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}
'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-20 16:00:09';
    this._versionBuild = 'jenkins-Bricolage-777';
    this._commitGIT = 'aba8ff3db4e0b17f391491f31d33f17d35fbd2f3';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}
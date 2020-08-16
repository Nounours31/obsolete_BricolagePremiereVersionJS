'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-16 20:00:08';
    this._versionBuild = 'jenkins-Bricolage-1738';
    this._commitGIT = 'a4cc161d50435b3a599448cdbac7e83b84f832c1';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}
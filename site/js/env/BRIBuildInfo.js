'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-16 12:00:08';
    this._versionBuild = 'jenkins-Bricolage-2104';
    this._commitGIT = '1980ba9c83a836ba9fb1c1f0c32970f8913bbc2f';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}
'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-10 16:00:09';
    this._versionBuild = 'jenkins-Bricolage-1713';
    this._commitGIT = 'ce711b6a7b136958d95c7cba202d1d5a99c36e7b';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}
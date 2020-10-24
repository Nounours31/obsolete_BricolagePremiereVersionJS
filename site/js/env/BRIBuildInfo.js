'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-24 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-2014';
    this._commitGIT = 'af977b74defd473dbbd2ba442592ef3530824a6d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}
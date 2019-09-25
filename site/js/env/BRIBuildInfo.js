'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-25 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-434';
    this._commitGIT = 'cbd8bd1fbe52812b16c1e29e7fbf2ad1674a7b50';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}
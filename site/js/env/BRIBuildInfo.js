'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-29 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-326';
    this._commitGIT = '511c7f38dc2b443ffb3914e4c6393787e199f99b';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}
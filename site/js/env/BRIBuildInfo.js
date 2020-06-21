'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-21 16:00:08';
    this._versionBuild = 'jenkins-Bricolage-1513';
    this._commitGIT = 'fdcc2944b6599c831058272889e4bd7733d93163';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}
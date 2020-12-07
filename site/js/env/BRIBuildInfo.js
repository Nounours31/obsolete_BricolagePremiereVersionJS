'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-12-07 16:00:08';
    this._versionBuild = 'jenkins-Bricolage-2189';
    this._commitGIT = 'ea5d6309ba2f331ec0d27f225add290f2b001794';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}
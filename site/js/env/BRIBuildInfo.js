'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-02 16:00:06';
    this._versionBuild = 'jenkins-Bricolage-1925';
    this._commitGIT = 'c15122232a3312e5f25e0cbcecf44c4926a0fe2f';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}
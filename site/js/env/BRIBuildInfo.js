'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-12 12:13:06';
    this._versionBuild = 'jenkins-Bricolage-116';
    this._commitGIT = '6407d56fd24cfe29c5e883b1005082a10d8ae4dc';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}
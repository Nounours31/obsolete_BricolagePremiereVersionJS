'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-16 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-883';
    this._commitGIT = '48ced05f8c2d9c86e5ef43a772e5d1eeb9aeb53f';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}
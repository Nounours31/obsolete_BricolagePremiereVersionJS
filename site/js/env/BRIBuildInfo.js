'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-20 16:00:12';
    this._versionBuild = 'jenkins-Bricolage-165';
    this._commitGIT = '595a06169c9c06c5fad6f727d0d3737fbe9ffacd';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}
'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-17 08:00:08';
    this._versionBuild = 'jenkins-Bricolage-2107';
    this._commitGIT = '46ea311a19bcbeb785d56e274275e1fc52880643';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}
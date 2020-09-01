'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-01 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-1799';
    this._commitGIT = '82160e19a447f6f9db63aabb415d655ab8fa5e69';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}
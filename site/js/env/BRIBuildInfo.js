'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-01 16:00:06';
    this._versionBuild = 'jenkins-Bricolage-825';
    this._commitGIT = '736ed70d739c850891750362f103be82a4bdaa88';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}
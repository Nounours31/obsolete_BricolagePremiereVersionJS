'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-26 20:00:06';
    this._versionBuild = 'jenkins-Bricolage-2022';
    this._commitGIT = '2190d6b93a7a700fe81433b31052aaaa187e9cde';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}
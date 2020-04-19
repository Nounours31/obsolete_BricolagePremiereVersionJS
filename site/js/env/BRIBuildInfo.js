'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-19 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-1259';
    this._commitGIT = 'd869bc8055f0584f238a0ffc296c64a9fa84f96a';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}
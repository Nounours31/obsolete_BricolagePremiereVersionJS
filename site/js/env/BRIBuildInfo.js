'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-04 16:00:06';
    this._versionBuild = 'jenkins-Bricolage-713';
    this._commitGIT = '160bd7573de94d83bee6309a42d851c031aaaf71';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}
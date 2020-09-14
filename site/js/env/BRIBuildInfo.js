'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-14 16:00:06';
    this._versionBuild = 'jenkins-Bricolage-1853';
    this._commitGIT = '6bf84a400bf78d9d10a357b7fdbcf0e72a93b8f5';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}
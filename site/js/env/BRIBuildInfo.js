'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-22 08:00:07';
    this._versionBuild = 'jenkins-Bricolage-1759';
    this._commitGIT = 'a1373f137e982e249674921012fda1ba38abc52c';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}
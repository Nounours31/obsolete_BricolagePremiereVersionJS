'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-18 16:00:07';
    this._versionBuild = 'jenkins-Bricolage-1869';
    this._commitGIT = '6e2a1a08233fd1ee0a675e5ff0ebf96ff0a9b77f';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}
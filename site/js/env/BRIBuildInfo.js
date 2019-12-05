'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-05 16:00:07';
    this._versionBuild = 'jenkins-Bricolage-717';
    this._commitGIT = '9c7711fa56208d8c3e988ed8963ddeb9ca646833';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}
'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-11 16:00:04';
    this._versionBuild = 'jenkins-Bricolage-865';
    this._commitGIT = '7748a73086c38c4422a0888976ae95e94c65da66';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}
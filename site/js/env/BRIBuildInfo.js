'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-02 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-1806';
    this._commitGIT = '718acb5bac412f9fc600f8f6210c461d9b450c7f';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}